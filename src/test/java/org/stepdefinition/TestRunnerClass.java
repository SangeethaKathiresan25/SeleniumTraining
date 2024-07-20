package org.stepdefinition;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = "src/test/resources", glue = "org.stepdefinition", monochrome = true, 
dryRun = false, plugin = {"html:report", "junit:Report\\junitreport.xml"}

)

public class TestRunnerClass {

	
}
