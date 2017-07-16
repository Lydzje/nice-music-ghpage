/*Copyright (c) 2017 Lydzje Software - All Rights Reserved.*/
"use strict";

// VARIABLES
// ---------

var sideNav = document.getElementById('side-nav');
var menuButton = document.getElementById('menu-button');
var navElements = document.getElementById('nav-elements');
var authorsSection = document.getElementById('authors-section');
var iframeInterface = document.getElementById('iframe-interface')
var navExpanded = false;

var authorFrame = document.getElementById('author-frame');

// METHODS
// -------

function openNav() {
  sideNav.style.width = "16em";
  menuButton.style.display = "none";
  navElements.style.display = "block";
  navElements.style.pointerEvents = "auto";
  navElements.style.height = "100%";
  navElements.style.opacity = "1";
  navElements.style.WebkitTransition = "2s";
  navElements.style.trransition = "2s";
  authorsSection.style.left = "17em";
  authorsSection.style.zIndex = "-1";
  iframeInterface.style.left = "17em";
  navExpanded = true;
}

function closeNav() {
  if(navExpanded){
    sideNav.style.width = "4em";
    menuButton.style.display = "block";
    navElements.style.display = "hidden";
    navElements.style.pointerEvents = "none";
    navElements.style.height = "0";
    navElements.style.opacity = "0";
    navElements.style.WebkitTransition = "0s";
    navElements.style.trransition = "0s";
    authorsSection.style.left = "5em";
    authorsSection.style.zIndex = "2";
    iframeInterface.style.left = "5em";
    navExpanded = false;
  }
}

function goToAuthor(authorLink) {
  authorFrame.src = authorLink;
}
