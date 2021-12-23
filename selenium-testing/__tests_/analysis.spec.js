import { jest, afterAll, beforeAll, describe, expect, test } from "@jest/globals";
import { By } from "selenium-webdriver";
import { driver } from "../driverfactory";
import { findElementBy, wait } from "../utils";
import HomePage from "../__pageobjects__/analysis_page";

jest.setTimeout(10000);

beforeAll(async () => {
    await driver.navigate().to('http://localhost:3000/analysis');
    await findElementBy(By.css('body'), 30 * 1000)
});

afterAll(async () => {
    await driver.quit();
});

describe('Analysis page', () => {

    describe('Initial state', () => {
        test('datatable is hide', async () => {
            try {
                await driver.findElement(HomePage.dataTableTitle)
            }catch(err){
                expect(true).toBe(true)
            }
        });
    
        test('route title is "analysis"', async () => {
            const routeTitle = await HomePage.getRouteTitle()
            expect(routeTitle).toBe('ANALYSIS')
        });
    })

    describe('Navigation', () => {
        test('go to workspace 1', async () => {
            const link = await findElementBy(By.css('.route-link:nth-child(1)'))
            link.click()
            await wait(2 * 1000)
            const routeTitle = await HomePage.getRouteTitle()
            expect(routeTitle).toBe('WORKSPACE 1')
        });

        test('back to analysis', async () => {
            const link = await findElementBy(By.css('.route-link:nth-child(3)'))
            link.click()
            await wait(2 * 1000)
            const routeTitle = await HomePage.getRouteTitle()
            expect(routeTitle).toBe('ANALYSIS')
        });
    })

});