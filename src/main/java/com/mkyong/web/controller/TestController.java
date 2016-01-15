package com.mkyong.web.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Created by Makhobey Oleh on 1/14/16. emai: tajcig@ya.ru
 */

@Controller
public class TestController {
	@RequestMapping("/")
	public String getHome() {
		return "testService";
	}

}
