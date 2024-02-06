## Travel Photographer Of The Year Awards

This project was generated with Angular CLI version 12.2.16.

## Development server
Run ng serve for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

## Design
Purpose of the appplication: Provide a place where aspiring travel photographers can enter their work into a prestigious competition to recieve rewards and recognition for their work.

**Notes**: I used my own photography for this application from my time spent in South America.

Flow:

1.	Homepage Requirements:
•	visually striking
•	simple

![image](https://github.com/jtnaughton/Photo-awards/assets/80038241/8465b45c-7884-4304-a009-7ce9f24bc1a3)

 
3.	Submission form Requirements:
o	Validation of inputs
o	Submission message thanking user

![image](https://github.com/jtnaughton/Photo-awards/assets/80038241/02174f0d-3f30-4d38-9cdf-f92758719459)
![image](https://github.com/jtnaughton/Photo-awards/assets/80038241/bf0b5941-46f2-4fae-87f5-56587d37f3fa)

   
5.	Grid showing list of shortlist entries for 2024 Requirements:
o	Users can open images from within the table.
o	Display Rows/Columns with a Paginated grid.

![image](https://github.com/jtnaughton/Photo-awards/assets/80038241/4d96be01-efe0-4e5a-b38f-e3ad427038d7)

 
## List of Proposed Improvements

•	Implement functionality to read locally selected image files by the user. Currently, the application does not display these images in the grid. Enhance the application to read the file content and convert it to a format that can be used as a source for an image, such as a base64-encoded data URL.

•	Enhance the test coverage for the application. Presently, only basic testing exists to confirm the creation of components and services. Expand the test suite to ensure correct data flow and validate the expected execution of functions.

•	Refactor the codebase by centralizing reusable elements such as buttons and other CSS/HTML code into a shared folder. Distribute these elements throughout the application to maintain code conciseness and reduce bundle size. Additionally, move rowData and colData to 
separate JSON files and import them into the Grid Component.

•	Enhance type safety by providing object types for properties like formData. Create an interface for formData to describe its structure. This practice improves the chances of detecting bugs and enhances the readability of the application.

•	Improve the overall design of the application. Implement consistent use of whitespace, similar to the approach used on the homepage surrounding the landing page image, throughout the rest of the application to enhance UX consistency. Additionally, consider creating a more visually appealing background and color scheme for the form and grid sections.

