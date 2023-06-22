describe('Simple Test POC: Login and logout user', () => {    
    it('Logins user', () => {
      cy.viewport(1280, 720)
      cy.visit('/client/#/login')
      cy.url()
        .should('contain', '/login')  
      cy.fixture('user-data')
        .then(data => {
          let uname = data[0].username
          let pass = data[0].password
          cy.login(uname, pass)
      });
    });
    
    it('Logouts user', () => {
        cy.get('.mat-toolbar > :nth-child(1) > .mat-menu-trigger').last()
            .click()
        cy.get('span')
        .contains('Logout')
        .click()
    })
});