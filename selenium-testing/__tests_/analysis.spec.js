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

    describe('Toogle buttons', () => {
        test('toggle card 1', async () => {
            const card = await findElementBy(By.css('.serie-cards .serie-card:nth-child(1)'))
            const body = await card.findElement(By.css('.card-body'))
            const toggleButton = await card.findElement(By.css('.serie-toggle-card'))
            expect(await body.isDisplayed()).toBe(false)
            toggleButton.click()
            await wait(1 * 1000)
            expect(await body.isDisplayed()).toBe(true)
            toggleButton.click()
            await wait(1 * 1000)
            expect(await body.isDisplayed()).toBe(false)
        });

        test('toggle chart', async () => {
            const card = await findElementBy(By.css('.serie-cards .serie-card:nth-child(1)'))
            const toggleButton = await card.findElement(By.css('.serie-toggle-card'))
            toggleButton.click() // open card
            await wait(500)

            const toggleChart = await card.findElement(By.css('.serie-toggle-chart'))
            try {
                await card.findElement(By.css('.recharts-responsive-container'))
                expect(false).toBe(true)
            }catch(err){
                expect(true).toBe(true)
            }

            toggleChart.click()
            await wait(500)

            await card.findElement(By.css('.recharts-responsive-container'))
        })

        test('toggle datatable', async () => {
            const card1 = await findElementBy(By.css('.serie-cards .serie-card:nth-child(1)'))
            const card2 = await findElementBy(By.css('.serie-cards .serie-card:nth-child(2)'))

            const card1Title = await card1.findElement(By.css('.card-serie-name'))
            const card2Title = await card2.findElement(By.css('.card-serie-name'))

            const toggleList1 = await card1.findElement(By.css('.serie-toggle-data-table'))
            const toggleList2 = await card2.findElement(By.css('.serie-toggle-data-table'))

            driver.executeScript("arguments[0].click()", toggleList1); 
            await wait(500)

            const datatable = await findElementBy(HomePage.dataTableTitle)
            const dataTableTitle = await findElementBy(HomePage.dataTableTitle)
            expect(await datatable.isDisplayed()).toBe(true)

            expect(await dataTableTitle.getText()).toBe(await card1Title.getText())

            driver.executeScript("arguments[0].click()", toggleList2); 

            await wait(500)

            expect(await dataTableTitle.getText()).toBe(await card2Title.getText())
        })
    })

});