# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

Ticket 1 - Assign Custom IDs to Agents
    As a Facility, I want to assign each Agent which works with me a custom ID so that I can enter this custom ID when generating a report. 

    1. A new 'customId' column is required on the 'Agents' table to store a list of 'customId' for an Agent.
    2. A text box is required on Agent profile page for facility member to assign this customId to an Agent, currently assuming this field is not required. Once page is saved, this data will save into the 'Agents' table on the 'customId' column.
    
    Estimate: 4hr for Development and 1hr for Testing.
    

Ticket 2 - getShifts along with customId.
    As a client, I want to get back customId of all the Agents' shifts worked for a given quarter so that it can displayed in the PDF report.

    1. When PDF is generated, a new column of customId will be displayed in report. This data will be fetched from the Agents table for each Agent's row in the report. 

    Estimate: 2hrs of Development and 30 mins for testing.