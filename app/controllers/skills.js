exports.viewSkills = function(req, res) {
    res.json({
      description: "I have always found myself as one who can grow and adapt to different requirements and situations. As such, I am constantly looking to improve myself. I am a very hands on person and find the best way to learn something is to build, break and repair something. I have always been someone who is not afraid to find out how something works. I have extensive experience liaising with key stakeholders for client based projects, and working with internal accounts teams to make their job easier while dealing with clients. My passion is digital. In my spare time I also enjoy setting up my own person LAMP server on digitalocean. I also love statistics and finding ways to get numbers and data, either through scraping data or API's.",
      list: [
      'PHP','HTML','CSS','JavaScript','NodeJS','Symfony 2','Silex','Objective C','Linux (Ubuntu)'
    ]});
}
