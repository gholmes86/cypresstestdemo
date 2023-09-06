
import { todoListPage } from '../support/pages/todoListpage'

describe('TODO LIST test scenarios', () => {

  beforeEach('Log in the user, go to Listing page', () => {
    cy.visit('http://localhost:3000/')
    cy.get(todoListPage.statusButton).should('be.visible')
  })

  it('I should see no ToDos', () => {
    cy.get(todoListPage.noToDo_text).should('be.visible').contains('No Todos')
  })

  it('Create a ToDo task', () => {
    cy.get('[class="button_button__zbfSX button_button--primary__09xDJ"]').click()
    cy.get('label[for="title"]').should('be.visible')
    cy.get('input#title').should('be.visible')
    cy.get('select#type').should('be.visible')
  })

  it('Fills out the form with test data from CSV', () => {
    // Read test data from the CSV file
    cy.readFile('testdata.csv').then((csvData) => {
      // Convert CSV data to JSON
      const jsonArray = csvData.split('\n').map((row) => {
        const [title, status] = row.split(',')
        return { title, status }
      })
  
      // Loop through the test data rows
      jsonArray.forEach((data) => {
        const { title, status } = data;
        cy.get('[class="button_button__zbfSX button_button--primary__09xDJ"]').click()
        cy.get('label[for="title"]').should('be.visible')
        // Fill out the form with the data from the current row
        cy.get('input#title').type(title)
        cy.get('select#type').select(status)
        cy.get('button[type="submit"]').click();
        cy.get('[class*="todoItem_icon"]').eq(0).click()
        cy.get(todoListPage.noToDo_text).should('be.visible').contains('No Todos')
  
      });
    });
  });
  

  it('I should be able to create a ToDo', () => {
    const randomNumber = Math.floor(Math.random() * 1000) + 1
    const uniqueTitle = `My New ToDo ${randomNumber}`
    cy.get('[class="button_button__zbfSX button_button--primary__09xDJ"]').click()
    cy.get('label[for="title"]').should('be.visible')
    cy.get('input#title').type(uniqueTitle)
    cy.get('select#type').select('Incomplete')
    cy.get('[type="submit"]').click()
    cy.get('[class*="todoItem_todoText"]').should('contain', uniqueTitle)
  })

  it('I should be able to see an Update ToDo dialog box', () => {
    const randomNumber = Math.floor(Math.random() * 1000) + 1
    const uniqueTitle = `My New ToDo ${randomNumber}`
    cy.get('[class="button_button__zbfSX button_button--primary__09xDJ"]').click();
    cy.get('label[for="title"]').should('be.visible')
    cy.get('input#title').type(uniqueTitle)
    cy.get('select#type').select('Incomplete')
    cy.get('[type="submit"]').click()
    cy.get('[class*="todoItem_todoText"]').should('contain', uniqueTitle)
    cy.get('[class*="todoItem_icon"]').eq(1).click()
    cy.get('h1.modal_formTitle__dyssK').should('be.visible').contains('Update TODO');
    cy.get('button.button_button__zbfSX.button_button--primary__09xDJ').should('be.visible').contains('Update Task')
  })

  it('I should be able Update ToDo dialog box', () => {
    const randomNumber = Math.floor(Math.random() * 1000) + 1
    const uniqueTitle = `My New ToDo ${randomNumber}`
    cy.get('[class="button_button__zbfSX button_button--primary__09xDJ"]').click()
    cy.get('label[for="title"]').should('be.visible')
    cy.get('input#title').type(uniqueTitle)
    cy.get('select#type').select('Incomplete')
    cy.get('[type="submit"]').click()
    cy.get('[class*="todoItem_icon"]').eq(1).click()
    cy.get('input#title').clear().type('Updated ToDo Title')
    cy.get('select#type').select('Completed')
    cy.get('[type="submit"]').click()
    cy.get('[class*="todoItem_todoText"]')
      .should('be.visible')
      .contains('Updated ToDo Title')
  })

  it('I should be able delete box', () => {
    const randomNumber = Math.floor(Math.random() * 1000) + 1
    const uniqueTitle = `My New ToDo ${randomNumber}`
    cy.get('[class="button_button__zbfSX button_button--primary__09xDJ"]').click()
    cy.get('label[for="title"]').should('be.visible')
    cy.get('input#title').type(uniqueTitle)
    cy.get('select#type').select('Incomplete')
    cy.get('[type="submit"]').click()
    cy.get('[class*="todoItem_icon"]').eq(0).click()
    cy.get(todoListPage.noToDo_text).should('be.visible').contains('No Todos')
  
  })
})