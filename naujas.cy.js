describe('BBv2' , function()
{
    it('clear button in BYB', function () {
        cy.visit('https://widgets-bm.dev.digitalsportstech.com/betbuilder?sb=test&demo=true')
        cy.get('.ligues-slider__list').contains('MLB').click() //can be not active,than takes active market below
        cy.wait(2000)
        cy.get('.main-stat__content').first().click()
        cy.get('.over-under-block__selector-value').first().click()
        cy.get('.wager').type(1)
        cy.get('.bat-slip__item__block-btn__btn').click()
        cy.get('.btn-cancel').click()
    })
})