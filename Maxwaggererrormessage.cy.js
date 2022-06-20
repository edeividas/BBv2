describe('Max wagger error',() => {
    it('Cheks max wagger error message', () => {
        cy.visit('https://widgets-bm.dev.digitalsportstech.com/betbuilder?sb=test&deividas=true&shwExp=true&demo=true')
        cy.get(':nth-child(2) > .ligues-slider__item').click()
        cy.wait(1000)
        cy.get(':nth-child(2) > app-main-stats-grouped > .main-stats__item > :nth-child(2) > app-main-stats-games > .main-stat__content > .tiered-block > .tiered-block__item > .tiered-block__item__top > .tiered_block__top__controls > .icon').click()
        cy.get(':nth-child(2) > .ligues-slider__item').click()
        cy.wait(2000)
        cy.get('.wager').type(1001)
        cy.get('.error__text > p').should('contains.text', 'Max wager exceeded. Limit for this bet is')
    })
})