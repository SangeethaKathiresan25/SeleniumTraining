$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/FbRegistration.feature");
formatter.feature({
  "name": "To validate the accpunt creation of FB application",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "To create new account",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "To launch the chrome browser and maximize the same windows",
  "keyword": "Given "
});
formatter.match({
  "location": "PositiveandNegativeofFb.to_launch_the_chrome_browser_and_maximize_the_same_windows()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To launch the URL of fb",
  "keyword": "When "
});
formatter.match({
  "location": "PositiveandNegativeofFb.to_launch_the_URL_of_fb()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To click the create new account",
  "keyword": "And "
});
formatter.match({
  "location": "PositiveandNegativeofFb.to_click_the_create_new_account(DataTable)"
});
formatter.result({
  "error_message": "cucumber.runtime.CucumberException: Step [To click the create new account] is defined with 1 parameters at \u0027org.stepdefinition.PositiveandNegativeofFb.to_click_the_create_new_account(DataTable) in file:/C:/Users/ksang/eclipse-workspace/CucumberProject/target/test-classes/\u0027.\nHowever, the gherkin step has 0 arguments.\nStep text: To click the create new account\r\n\tat cucumber.runner.PickleStepDefinitionMatch.arityMismatch(PickleStepDefinitionMatch.java:84)\r\n\tat cucumber.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:36)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:63)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:49)\r\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:43)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:44)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:40)\r\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:124)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:65)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:133)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:93)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:40)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:529)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:757)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:452)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:210)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "To pass the first name",
  "rows": [
    {
      "cells": [
        "Selenium",
        "Java",
        "PHP",
        "python",
        "Reactive Native"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "PositiveandNegativeofFb.to_pass_the_first_name(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "To pass the second name",
  "keyword": "And "
});
formatter.match({
  "location": "PositiveandNegativeofFb.to_pass_the_second_name()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "To pass mobile number and email in email text box",
  "rows": [
    {
      "cells": [
        "seleniuminmakes@gmail.com",
        "496254165625",
        "abc@gmail.co,",
        "9695874632"
      ]
    },
    {
      "cells": [
        "def@gmail.com",
        "45975223284",
        "zxy@gmail.com",
        "789546123"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "PositiveandNegativeofFb.to_pass_mobile_number_and_email_in_email_text_box(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "To creat new password using new password text box",
  "keyword": "And "
});
formatter.match({
  "location": "PositiveandNegativeofFb.to_creat_new_password_using_new_password_text_box()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "To click the login button",
  "keyword": "And "
});
formatter.match({
  "location": "PositiveandNegativeofFb.to_click_the_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "To close the browsers",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});