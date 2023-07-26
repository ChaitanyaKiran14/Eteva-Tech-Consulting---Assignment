const List1=['Hyderabad', 'Bangalore', 'Chennai', 'Delhi', 'Pune', 'Kolkata']
const List2=['Gujarat', 'Pune', 'Rajasthan', 'Bangalore', 'Vizag', 'Delhi']

const list1NotInList2 = [];
for (let i of List1) {
  if (!List2.includes(i)) {
    list1NotInList2.push(i);
  }
}
console.log(list1NotInList2);

const list2NotInList1 = [];
for (let i of List2) {
    if (!List1.includes(i)) {
        list2NotInList1.push(i);
    }
}
console.log(list2NotInList1);

const list2IntersectionList1 = [];
for (let i of List2) {
    if (List1.includes(i)) {
    list2IntersectionList1.push(i);
    }
}
console.log(list2IntersectionList1);
