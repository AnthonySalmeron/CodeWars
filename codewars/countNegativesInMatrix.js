var countNegatives = grid=> grid.map(el=>el.filter(x=>x<0).length).reduce((sum,curr)=>sum+curr)
