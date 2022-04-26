# Bar-Hop Team Project ![Bar-Hop Logo](./assets/images/android-chrome-192x192.png)

> Bar-Hop project. A web application with a cocktail-recipe search.
> Live demo [_here_](https://deromuald.github.io/bar-hop/). 

## Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)
* [Instructions](#instructions)
* [Features](#features)
* [Screenshots](#screenshots)
* [Usage](#usage)
* [Project Status](#project-status)
* [Room for Improvement](#room-for-improvement)
* [Acknowledgements](#acknowledgements)
* [Contacts](#contacts)



## General Info
Current app will provide an ability to find a cocktail recipe by its name. As well, as ability to get a random cocktail by a click of a button.

## Technologies
Project is created with:
- HTML
- CSS
- JavaScript
- jQuery
- Google Map API and Places API
- TheCocktailDB Cocktail API


## Setup
To open this project in vscode using git in Terminal/Git Bash:

```
$ mkdir bar-hop
$ cd bar-hop
$ git clone https://github.com/DeRomuald/bar-hop.git
$ code .
```

## Instructions
<!-- left here remove it later -->
### When you open app you presented with Age Check Modal and Location Access Allow window.
- In Age Check Modal you can only click Yes or No. You can't close it with clicking outside of the modal.
   - If you less than 21 and choose NO you will be redirected to a baby website. 
   - If you click Yes in Age Check Modal you will get access to the web app. The local storage will store your selection and won't bother you with this question anymore.
   - If you won't give permission to access your location if will use default location: Miami,FL. And display 20 liquor stores that in this area.
   - If you give permission to access your location the map will display 20 liquor stores close to your location.


1. To search for a cocktail by name:
- Enter a cocktail name in the and click "Find a Recipe"
   - You will be given result based on your request.
   - If you pick a cocktail that not in API database 

2. You can start a new search, just follow instruction in step 1.
- If you have previous searched a cocktail or three cocktails it will be displayed on the screen, new search will replace it.

3. If you want to .....
   
4. something.



## Features
- API
- DOM
- localStorage
- dynamically created elements

## Screenshots
![Example screenshot](./assets/images/screenshot.gif)


## Usage
For information that helps you make cocktails.

## Project Status
Project is: _completed_

## Room for Improvement
To do:
- Add search feature of nearby bars 
- Add menu to nearby bars 
- Suggest bars with the best menu & ratings. 


## Acknowledgements
- This project was inspired by UM Coding Boot Camp Project #1.
- This project was creating from scratch using ideas and believes of an incredible team of people👽.
![Example gif](./assets/images/team-people.jpg)
## Contacts
Created by:
- [Stepan Matysik](https://github.com/elfsvet)
- [Rome Romulus](https://github.com/DeRomuald)
- [Marisol Matute](https://github.com/marisolxmatute10)
- [Juan Tantau (Luis)](https://github.com/JuanTantau)

