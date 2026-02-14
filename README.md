# Release Checklist Generator

A modern web-based tool to generate Excel release checklists for multiple CORE cases using a predefined Excel template.

This tool replaces long and complex command-line usage with a clean, easy-to-use browser UI.

---

## ✨ What This Tool Does

- Takes an Excel template (.xlsx)
- Takes multiple CORE case numbers
- Creates one Excel file per CORE case
- Copies formatting and content from the template
- Saves all files into a chosen output folder

No CMD arguments.  
No confusion.  
Just click and generate.

---

## 📁 Project Structure (IMPORTANT)

Your project folder **must** look like this:

your_project/
│
├─ app.py
├─ generate_release_checklist.py
├─ README.md
└─ web/
├─ index.html
├─ style.css
└─ script.js



If this structure is wrong, the UI will not load properly.

---

## ⚙️ Requirements

- Python 3.8 or higher  
- pip installed  
- Excel template file (.xlsx)  

Install required libraries:

```bash
pip install flask openpyxl


▶️ How to Run the Application

Open terminal in the project folder

Run:

python app.py


Open your browser and go to:

http://127.0.0.1:5000


You will see the Release Checklist Generator UI.

🖥 How to Use the UI
1️⃣ Template Excel File

Select the Excel file that contains your checklist format.

Example:

CORE-47.xlsx


This file is used as the base template for all generated files.

2️⃣ CORE Case Numbers

Enter CORE case IDs separated by:

Commas

OR new lines

Example:

CORE-175, CORE-469, CORE-492


or

CORE-175
CORE-469
CORE-492

3️⃣ Output Folder Name

Enter the folder name where Excel files will be saved.

Example:

CORE_2.42

4️⃣ Generate Checklist

Click Generate Checklist.

The system will:

Create the output folder

Generate one Excel file per CORE case

Copy formatting + content from the template

📂 Output Example

Input:

Output Folder: CORE_2.42
Cases: CORE-175, CORE-469


Output:

CORE_2.42/
├─ CORE-175.xlsx
└─ CORE-469.xlsx


Each file is a formatted copy of the template.

🛠 Technologies Used
Component	Technology
Backend	Python + Flask
Excel Processing	openpyxl
Frontend	HTML, CSS, JavaScript
UI	Modern Web UI
Server	Localhost
❗ Common Issues & Fixes
UI not loading / no styling

Make sure files are inside the web/ folder:

web/
  ├─ index.html
  ├─ style.css
  └─ script.js


Restart Flask:

python app.py

Button does nothing

Press F12 → Console

Check for JavaScript errors

Restart Flask server

Excel files not generating

Check:

Template file path is correct

Output folder name is valid

Case numbers are not empty

📌 How This Tool Works (Behind the Scenes)

Browser UI collects:

Template file path

CORE case numbers

Output folder name

UI sends data to Flask backend

Flask runs:

generate_release_checklist.py


Script:

Copies Excel template

Creates one file per case

Preserves formatting

Files are saved in output folder

🚀 Future Enhancements (Optional)

Drag & drop file upload

Output folder picker

Case counter

Dark mode

Windows EXE version

Cloud hosting

👨‍💻 Summary

This tool allows anyone to generate release checklists without using the command line.

No CMD  
No confusion  
Just click and generate.

📞 Support

If the UI does not load or files are not generated:

Check folder structure

Restart Flask

Verify file paths

Check browser console