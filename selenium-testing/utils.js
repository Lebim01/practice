import { driver } from "./driverfactory";
import { until } from "selenium-webdriver";

export const findElementBy = (locator, time = 20 * 1000) => {
    const webElement = driver.wait(until.elementLocated(locator), time);
    return driver.wait(until.elementIsVisible(webElement), time);
}

export const wait = (miliseconds) => {
    return new Promise((resolve) => {
        setTimeout(resolve, miliseconds)
    })
}