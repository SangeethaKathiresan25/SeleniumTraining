package org.stepdefinition;

import io.cucumber.datatable.*;

import java.util.List;

import org.base.BaseClass;
import org.pojo.FbLoginPojo;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class PositiveandNegativeofFb extends BaseClass{
	
	FbLoginPojo f;
	@Given("To launch the chrome browser and maximize the same windows")
	public void to_launch_the_chrome_browser_and_maximize_the_same_windows() {
		launchBrowser();
		windowMaximize();
	    
	}

	@When("To launch the URL of fb")
	public void to_launch_the_URL_of_fb() {
		launchUrl("https://en-gb.facebook.com/login/");
	   
	}

	@When("To click the create new account")
	public void to_click_the_create_new_account(DataTable d) {
		
		List<String> l = d.asList();
		f =new FbLoginPojo();
		passtext(l.get(2), f.getEmail());
	    
	}

	@When("To pass the first name")
	public void to_pass_the_first_name(io.cucumber.datatable.DataTable d) {
		
		List<List<String>> l = d.asLists();
		f = new FbLoginPojo();
		passtext(l.get(1).get(2), f.getPassword());
	    
	}
	
	@When("To pass the second name")
	public void to_pass_the_second_name() {
	
	}
	
	@When("To pass mobile number and email in email text box")
	public void to_pass_mobile_number_and_email_in_email_text_box(io.cucumber.datatable.DataTable dataTable) {
		
	}
	
	@When("To creat new password using new password text box")
	public void to_creat_new_password_using_new_password_text_box() {
		
	}

	@When("To click the login button")
	public void to_click_the_login_button() {
	    f = new FbLoginPojo();
	    clickBtn(f.getLoginBtn());    
	}

	@Then("To close the browser")
	public void to_close_the_browser() {
		closeEntireBrowser();
	    
	}


}
