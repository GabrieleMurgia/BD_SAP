module.exports = (srv) => {
    // AFTER READ di tutte le entità
    srv.after('READ', '*', (each, req) => {
        if (Array.isArray(each)) {
          for (const record of each) {
            console.log(record);
            if (record.hasOwnProperty('descr')) {
              record.descr += ' ✅ Gennaro';
            } else if (record.hasOwnProperty('description')) {
              record.description += '✅';
            }
          }
        } else {
            console.log("________")
          console.log(each.mitigation);
          if (each.hasOwnProperty('descr')) {
            each.descr += ' ✅ Gennaro';
          } else if (each.hasOwnProperty('mitigation')) {
            each.mitigation.description += '✅';
          }
        }
      });
      
  
    // BEFORE CREATE per Mitigations (esempio)
    srv.before('CREATE', 'Mitigations', (req) => {
      if (!req.data.status) {
        req.data.status = 'Pending';
      }
    });
  };
  