function domainType(domains: string[]): string[] {
   let domainType: string[] = [];
   for (let i = 0, length = domains.length; i < length; i++) {
      const domain = domains[i].split('.');
      let lastDomain = domain[domain.length - 1];
     

      if (lastDomain === 'com') {
         domainType.push('commercial');
      }
      if (lastDomain === 'org') {
         domainType.push('organization');
      }
      if (lastDomain === 'net') {
         domainType.push('network');
      }
      if (lastDomain === 'info') {
         domainType.push('information');
      }else{
         domainType.push('others');
  
      }

   }
   return domainType;
}

console.log(domainType(["en.wiki.org", "codefights.com", "happy.net", "code.info" ,"hi.io"]));