# Remoteness (UI for AI image generator)

Link: http://www.remoteness.art

About: "remoteness, insularity, difficult topography" is an artistic work that consists of a GAN (Generative Adversarial Networks), fine-tuned Generative adversarial network (StyleGAN2), a website and a series of silkscreen prints. A data set was created from landscape photographs of travel destinations that were most frequently searched for in #stayathome spring 2020 when the home office became the new normal for many office workers. The model to a certain extent has learned to create images of longing. As non-nature, however, the ultimate disappointment remains inherent in the synthetic image. On a website visitors can generate their individual landscape background.

You can issue a request to the trained model to generate a new image in real time, which is then stored in a DB. At the same time the oldest image in the DB is displayed to the user (and set to "isUsed" in DB).

App using React.js, Express.js, Node.js, HTML, SCSS, MongoDB, REST-API, StyleGAN2, RunwayML API

## CRUD

- Create
- Read
- Update

## Archive generated images in Database

Database: landscapes
Collection: landscapes

### Pages

- / - Home page. Displays an empty frame / generated image, generate-button / download-button, info-link
- /gallery - displays a selection of random genrated landscapes from database

### Route Handlers

- GET - '/landscape'
  - RunwayMLAPI call - generates new landscape image
  - Landscape.findOneAndUpdate({ isUsed: false }, { isUsed: true}, { sort: { 'createdAt' : 1 } }) - fetches the oldest image from DB
- GET - '/random-landscapes'
  - Landscape.find --> 10 landscapes with isUsed true and isGallery true

### Models

Landscape

- image: {
  type: String,
  required: true }
- isUsed: {
  type: Boolean,
  required: true }
- isGallery: {
  type: Boolean }
