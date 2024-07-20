package org.pojo;

import org.base.BaseClass;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class SignInPojo extends BaseClass{
	
	public SignInPojo() {
		PageFactory.initElements(driver, this);
	}

	@FindBy(xpath = "//a[text()='Create new account']")
	private WebElement creatNewAcc;
	
	@FindBy(xpath = "(//input[@type='text'])[5]")
	private WebElement firstNameTextBox;
	
	@FindBy(name = "lastname")
	private WebElement secondNameTextBox;
	
	public WebElement getCreatNewAcc() {
		return creatNewAcc;
	}

	public WebElement getFirstNameTextBox() {
		return firstNameTextBox;
	}

	public WebElement getSecondNameTextBox() {
		return secondNameTextBox;
	}

	public WebElement getMobileNumber() {
		return mobileNumber;
	}

	public WebElement getPassWord() {
		return passWord;
	}
	
	

	@FindBy(name = "reg_email__")
	private WebElement mobileNumber;
	
	@FindBy (name = "reg_passwd__")
	private WebElement passWord;
}
