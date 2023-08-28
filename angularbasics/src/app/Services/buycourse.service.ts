export class BuyCourse {
    OnBuyClicked(title: string) {
        alert('WELCOME!! \nYou Successfully enrolled in ' + title + ' course\n\nThank you');
    }

    OnShowDetailsClicked(name: string, price: number, description: string, professor: string, duration: number) {
        confirm('Name:  ' + name + '\nPrice:  $' + price + '\nDescription:  " ' + description + ' "\nProfessor:  ' + professor + '\nDuration:  ' + duration+' hours');
    }

}