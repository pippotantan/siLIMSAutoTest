describe('Simple Test POC: Login and logout user', () => {    

    it('Visit and load SiLIMS client app', () => {
      const url = '/client/#/login';
      cy.viewport(1280, 720);
      cy.visit(url);
      cy.url().should('contain', url, {timeout:60000});
    });

    it('Logins user', () => {
      cy.fixture('user-data')
            .then(data => {
                let user = data[0];
                cy.get('[formControlName=username]').type(user.username);
                cy.get('[formControlName=password]').type(user.password);
                cy.get('[type=submit]').first().click();
            })
    });
    
    it('Logouts user', () => {
        cy.get('.mat-toolbar > :nth-child(1) > .mat-menu-trigger').last()
            .click()
        cy.get('span')
        .contains('Logout')
        .click()
    })
});