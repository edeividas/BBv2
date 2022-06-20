describe('Check exposure bets', () => {
    it('Checks max-exposure working correctly',() => {
        cy.visit('https://widgets-bm.dev.digitalsportstech.com/betbuilder?sb=test&deividas=true&shwExp=true')

        var  selectedMarket; 
        
        cy.get('.main-markets__item--active').invoke('text').then((text) => {

            if(text.trim() === 'Game Markets') {
                cy.log('Over/Under category currently selected.')
                selectedMarket = 'Over/Under';
            }
            if(selectedMarket === 'Over/Under') {
                cy.log('running test against Over/Under section')
                cy.get('.main-stat--open').first().click()
                cy.wait(1000)
                cy.get('.over-under-block__selector').not('.inactive').first().click()
                cy.get('.wager').type(1)
                cy.get('.bat-slip__item__block-btn__btn')
            } else {
                cy.log('Non O/U market category is currently selected')
                cy.get('.main-markets__item--active').click()
                
                
                
                cy.get('.tiered-block__item__top').click()
                cy.get('.over-under-block__selector').not('.inactive').first().click({force:true})
                cy.get('.over-under-block__selector').not('.inactive').first().click({force:true})
                cy.get('.wager').type(1)
                cy.get('.bat-slip__item__block-btn__btn')
                

               


            }
            
        })
    })
})
