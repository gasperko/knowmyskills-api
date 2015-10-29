exports.viewHistory = function(req, res) {
    res.json([
      work("We Are Social","Development Manager","January 2015","October 2015"),
      work("First (BeyondD)","Senior PHP Developer/Technical Lead","June 2014","December 2014"),
    ]);
}

function work(company,title,start,finish,notes)
{
  return {
    company: company,
    title: title,
    start: start,
    finish: finish,
    notes: notes
  };
}
