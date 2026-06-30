/* Five cardiac conduction questions, in checkpoint order.
   correct = index (0=A, 1=B, 2=C, 3=D). topic shows on your dashboard only. */
window.QUESTIONS = [
  {
    topic: "SA node location",
    q: "The SA node is the natural pacemaker. Where is it located?",
    options: [
      "Interventricular septum",
      "Wall of the right atrium, near the opening of the superior vena cava",
      "Apex of the left ventricle",
      "Base of the aorta"
    ],
    correct: 1
  },
  {
    topic: "Bridge across the fibrous skeleton",
    q: "The fibrous skeleton insulates the atria from the ventricles. Which structure is the only electrical bridge across it?",
    options: [
      "The coronary sinus",
      "The moderator band",
      "The AV bundle (bundle of His)",
      "The interatrial septum"
    ],
    correct: 2
  },
  {
    topic: "Pathway order",
    q: "Put the conduction pathway in order, from the pacemaker to the ventricular muscle.",
    options: [
      "SA node, AV node, bundle of His, bundle branches, Purkinje fibers",
      "AV node, SA node, Purkinje, bundle branches",
      "Bundle of His, SA node, AV node, Purkinje",
      "SA node, Purkinje, AV node, bundle branches"
    ],
    correct: 0
  },
  {
    topic: "Moderator band",
    q: "The moderator band carries the right bundle branch across the right ventricle to which structure?",
    options: [
      "The SA node",
      "The anterior papillary muscle",
      "The aortic valve",
      "The left atrium"
    ],
    correct: 1
  },
  {
    topic: "MI and the SA node",
    q: "An acute MI: the SA node stops and the heart rate is 48. Which artery is most likely occluded?",
    options: [
      "Right coronary artery",
      "Left anterior descending artery",
      "Left circumflex artery",
      "Coronary sinus"
    ],
    correct: 0
  }
];
