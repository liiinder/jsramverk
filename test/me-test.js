/**
 * Selenium test for my me-page in the course jsframework
 * 
 * @author Kristoffer Linder
 */
"use strict";

const assert = require("assert");
const test = require("selenium-webdriver/testing");
const webdriver = require("selenium-webdriver");
const By = require("selenium-webdriver").By;

let browser;

// Test Suite
test.describe("Me-page", function () {
    test.beforeEach(function (done) {
        this.timeout(30000);
        browser = new webdriver.Builder().
            withCapabilities(webdriver.Capabilities.firefox()).build();

        browser.get("http://localhost:8080/#/");
        done();
    });

    test.afterEach(function (done) {
        browser.quit();
        done();
    });

    function assertTitle(target) {
        browser.getTitle().then(function (title) {
            assert.equal(title, target);
        });
    }

    function assertH2(target) {
        browser.findElement(By.css("h2")).then(function (element) {
            element.getText().then(function (text) {
                assert.equal(text, target);
            });
        });
    }

    function matchUrl(target) {
        browser.getCurrentUrl().then(function (url) {
            assert.ok(url.endsWith("/#" + target));
        });
    }

    function goToNavLink(target) {
        browser.findElement(By.linkText(target)).then(function (element) {
            element.click();
        });
    }

    // Test case
    test.it("Test go to Home", function (done) {
        // Use nav link to go to home page
        browser.findElement(By.className("fa-home")).then(function (element) {
            element.click();
        });

        assertTitle("me");
        matchUrl("/");
        done();
    });

    test.it("Test go to register", function (done) {
        goToNavLink("Registrera");
        assertTitle("me");
        matchUrl("/register");
        assertH2("VÄLKOMMEN");
        done();
    });

    test.it("Test go to login", function (done) {
        goToNavLink("Logga in")
        assertTitle("me");
        matchUrl("/login");
        assertH2("LOGGA IN");
        done();
    });

    test.it("Test go to reports", function (done) {
        goToNavLink("Redovisningar")
        assertTitle("me");
        matchUrl("/reports/week/0");
        done();
    });
});