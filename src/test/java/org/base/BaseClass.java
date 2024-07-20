package org.base;


import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import io.github.bonigarcia.wdm.WebDriverManager;

public class BaseClass {
	
	public static WebDriver driver;
	
	
	public static void launchBrowser() {
		WebDriverManager.chromedriver().setup();
		driver = new ChromeDriver();
	}
	
	public static void windowMaximize() {
		driver.manage().window().maximize();
	}

	public static void launchUrl(String url) {
		driver.get(url);
		
	}
	
	public static void passtext(String txt, WebElement ele) {
		ele.sendKeys(txt);

	}
	
	public static void clickBtn(WebElement ele) {
		ele.click();

	}
	
	public static void closeEntireBrowser() {
		driver.quit();

	}
		
	}


