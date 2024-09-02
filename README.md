# Waitlist

This is scaffolding for a waitlist website. This repo allows you to quickly deploy a custom waitlist for a product complete with form tracking and analytics. It runs off of a config file located at `config.json`.

The project was designed to be built as a container, with the container and environment variables used to control the final output of the website.

## Deployment

Check `compose-example.yaml` on how to deploy this.

## Stack

- NextJS: JS framework
- Resend: Email sending
- Pocketbase: Signup tracking
- Plausible: Analytics