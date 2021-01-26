* each object with information has an _id

contributor collection:
  -top level of each object has: 
    @attributes: 
      cand_name
      cid: what is this?
      cycle: what is this year? the year this info is from?
      origin: where this info came from?
      source: url of where this info is from
      notice: description of where the money came from for this cand

    contributor:
      array of contributor to above candidate
        @attributes
          org_name
          total: total contribution to above candidate
          pacs: amount of total that came from political action committee
          indivs: amount of total from individuals in the org

industries collection:
  -top level of each object has:
    @attributes:
      cand_name
      cid: what is this?
      cycle: what does this year mean?
      origin: where this info came from?
      source: url source
      last_updated: date

    industry: array of industries contributing to above candidate
      @attributes:
        industry_code: code of which industry this one belongs to
        industry_name
        indivs
        pacs
        total

legislators collection:
  -top level of each object has:
    @attributes:
      cid
      firstlast: full name of legislator
      lastname
      party: political alignment
      office: position in office held (first two chars are state and second two is district they are representing)
      gender
      first_elected: year
      exit_code: where does one find these exit codes and what they mean?
      comments: brief comment about their exit status (IF EXIT CODE IS 0 THEN COMMENTS WILL BE EMPTY)
      phone: ###-###-####
      fax: ###-###-####
      website: url
      webform: where to contact online
      congress_office: where their office is located
      bioguide_id: biographical id in congress
      votesmart_id: id on website vote smart which provides info on politicians
      feccandid: FECCandID is a unique id given to candidates by FEC(Federal Election Commmision)
      twitter_id: twitter handle
      youtube_url: url to channel
      facebook_id: id of fb page
      birthdate: year-mm-dd

organizations collection:
  -top level of objects has:
    orgid: organization id
    orgname: organization name
