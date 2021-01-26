* contributor collection
  db.contributor.find({cand_name: "searched term"})
    SELECT * FROM contributor WHERE cand_name = "searched term"
  return (data)

  if searched term finds a candidate:
    redirect to Politician page and display:

      for PoliticianInfo.js
        name: data.@attributes.cand_name
        // WILL NEED TO QUERY LEGISLATORS COLLECTION FOR THESE FIELDS
        office: db.legislator.@attributes.office
        party: db.legislator.@attributes.party
        age: db.legislator.@attributes.birthdate (will need to format this to calculate age?)
        website: db.legislator.@attributes.website
        twitter: db.legislator.@attributes.twitter_id
        youtube: db.legislator.@attributes.youtube_url
        facebook: db.legislator.@attributes.facebook_id
      
      for Sponsers.js
        .map through data.contributor array
        company names: contributor.org_name
        contributions total: contributor.total

      for ChartForSponsers.js (when it gets created)
        loop through contributors to make an array of objects where:
          name: org_name
          value: total

      for Brand.js
        eventually there will be an image link saved in the org collection under orgid
        img src: db.organizations.find({name: "company name clicked on from Sponsers.js"}).orgid

      for SponserInfo.js (connected to table in Sponser.js)
        when user clicks on a row in the Sponsers.js table it will take to the org_name that matches and display:
          // will need to run another query that finds any contributor that matches the org_name clicked on and then displays the matching candidates and the companies total contributions to each candidate

          company name: use first one that matches company name clicked on db.contributors.contributor.org_name

          // may use google image API to get logos
          // figure out how to get socials if we want to use those later on

      for ChartForPoliticians.js
        create an array of objects with the politicians the correspond to the company where name: cand_name from @attributes and value: total in contributor.@attributes array

