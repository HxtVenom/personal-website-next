
# Personal Website

My personal website created using NextJS and TailwindCSS. The purpose of this website is to be used as a Portfolio/Resume/Blog for myself to present in the future.


## Deployment

To deploy this project:

1. Install all dependencies by running

```bash
  npm install
```

2. Ensure that your environment variables are setup.

3. Start the development server by running

```bash
  npm run dev
```

  
### Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`MONGODB_URI`

  
## Roadmap

- API work that needs to be done:
    - Create /projects/[id] routes to support operations on individual projects
    - Add limit to retrieving projects (only return a certain amount on preview)
    - Implement blog post stuff
---
- Project/[id] Page:
    - Create static generation using getStaticPaths
    - Should display:
        - link back to projects page
        - image as header
        - name
        - description
        - duties
        - links
---
- Blog Component:
    - Create
    - Should Display:
        - Title
        - Date
        - preview of text
        - link to full article
- Individual Blog Page:
    - Create
    - Should display:
        - link back to blogs page
        - image as header
        - Title
        - Date
        - Author/Authors
        - body of blog
        - maybe comments
    
