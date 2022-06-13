describe('just try example', () => {
    context('GET , data ', () => {
        it('should return full list and check it', () => {
            cy.request({
                method: 'GET' ,
                url: 'https://widgets-bm.dev.digitalsportstech.com/assets/i18n/en.json'
            })
            .should((response) => {
                expect(response.status).to.eq(200)
                expect(response.body).to.have.all.keys(
                    'props','epl','dfl','laliga','seriea','ncaamb','ncaafb','ucl','nhl','mlb','nfl','nba','ebl'
                  )
               
                cy.log(JSON.stringify(response.body))
                
            })

        })
        it('checks BBV2 config settings', () => {
            cy.request({
                method: 'GET',
                url: 'https://widgets-bm.dev.digitalsportstech.com/api/application-config?sb=test&deividas=true&shwExp=true'
            })
            .should((response) => {
                expect(response.status).to.eq(200)
                expect(response.body).to.have.property('name','test')
                expect(response.body).to.have.property('demo',true)
                expect(response.body).to.have.property('settings').to.have.property('currency').eq('usd')
                expect(response.body).to.have.property('settings').to.have.property('language').eq('en')
                expect(response.body).to.have.property('settings').to.have.property('showLeagueSchedule').eq(true)
                expect(response.body).to.have.property('settings').to.have.property('allowMixedMultiOnly').eq(false)
                expect(response.body).to.have.property('ou').eq(true)
                expect(response.body).to.have.property('pph').eq(false)

                cy.log(JSON.stringify(response.body))
                
            })
        })

    })
})