# Information Required Before Launch

Run `node build.mjs` to see what's still missing. Nothing on the site has been invented.

## Already set

- [x] Name: **Piedwell**
- [x] Phone: **(704) 666-9328**
- [x] Site URL: `https://piedwell.netlify.app`
- [x] Hours: **Monday–Friday, 9:00 AM – 5:00 PM (Eastern Time)**, office meetings by appointment
- [x] Business type: **storefront office** at **10101 David Taylor Dr #101, Charlotte, NC 28262** (Google Business Profile "Local store")
- [x] Services confirmed: plan setup, records and valuations, Form 5500-EZ preparation, ongoing
      support, Self-Directed and Solo 401(k) education, and office meetings
- [x] Role: administrative support alongside the client's plan provider, at the sponsor's
      direction. The business is not a fiduciary, trustee, custodian, registered investment
      adviser or broker-dealer.
- [x] Format: a one-page site, with separate Privacy, Terms and Disclosures pages

## Required

| Item | Notes |
|---|---|
| **Register the business name** | North Carolina assumed business name certificate with the Mecklenburg County Register of Deeds. Then set `business.publicNameConfirmed: true`. Check the NC Secretary of State business registry, the USPTO and Google Maps for "Piedwell" conflicts first. |

Optional: `business.geo` with the office's real coordinates.

## Recommended before going public

- [ ] An attorney has reviewed the Privacy Policy, Terms and Disclosures (North Carolina law, administrative-services wording).
- [ ] An ERISA attorney has confirmed the administrative-services role.
- [ ] Netlify: form detection is on, an email notification is set up, and a test submission was received.
- [ ] Netlify: the project is public. Then add the Search Console verification code to `site.googleSiteVerification`.

## Optional (hidden until set)

Business email, owner name, company history and credentials.
