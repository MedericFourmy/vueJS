let TrStudent = Vue.extend({
    props: ['student'],
    template: '<tr class="student">\
                    <td>Toto</td>\
                    <td v-for="day in student.daysMissed">\
                        <input type="checkbox" v-model.clicked="day.missed">\
                    </td>\
                    <td>{{nbDaysMissed}}</td>\
                </tr>',
    computed: {
        nbDaysMissed: function(){
            let nb = 0;
            for (let day of this.student.daysMissed){
                if (day.missed)
                    nb += 1;
            }
            return this.student.daysMissed.length - nb;
        }
    }
})

let vm = new Vue({
    el: '#vm-table',

    data: {
        days: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        students: [
            {   
                name: 'poulpo',
                daysMissed: [
                {nb: 1, missed: 0},
                {nb: 2, missed: 1},
                {nb: 3, missed: 1},
                {nb: 4, missed: 1},
                {nb: 5, missed: 1},
                {nb: 6, missed: 1},
                {nb: 7, missed: 0},
                {nb: 8, missed: 0},
                {nb: 9, missed: 1},
                {nb: 10, missed: 0}
                ]
            },
            {   
                name: 'batman',
                daysMissed: [
                {nb: 1, missed: 0},
                {nb: 2, missed: 0},
                {nb: 3, missed: 0},
                {nb: 4, missed: 0},
                {nb: 5, missed: 0},
                {nb: 6, missed: 0},
                {nb: 7, missed: 0},
                {nb: 8, missed: 0},
                {nb: 9, missed: 1},
                {nb: 10, missed: 0}
                ]
            },
            {   
                name: 'robin',
                daysMissed: [
                {nb: 1, missed: 0},
                {nb: 2, missed: 0},
                {nb: 3, missed: 0},
                {nb: 4, missed: 0},
                {nb: 5, missed: 0},
                {nb: 6, missed: 0},
                {nb: 7, missed: 0},
                {nb: 8, missed: 1},
                {nb: 9, missed: 0},
                {nb: 10, missed: 0}
                ]
            }
        ]
    },

    components: {
        'tr-student': TrStudent
    }
})