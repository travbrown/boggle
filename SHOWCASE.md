---
title: "Boggle"
description: "Browser-based Boggle game with a DFS word solver, Firebase-backed challenges, and Google Auth."
tags: ["JavaScript", "React", "Firebase", "Algorithms", "Game Dev"]
featured: false
order: 5
live_url: ""
image: ""
---

I built a fully playable Boggle web app on top of a custom depth-first search solver that traverses a 5×5 letter grid to validate words against a complete English dictionary—including correct handling of the special "Qu" tile. The front end is React with Material-UI, and Firebase Firestore backs a challenge mode where shared boards track high scores across users authenticated via Google. Writing the solver first with Jest tests, then wrapping it in a React UI, was a clean way to keep the core logic pure and the interface thin.
