import { FormControl } from '@angular/forms';

export class SignupValidators {
    static shouldBeUnique(control: FormControl) {
        return new Promise((resolve, reject) => {
            setTimeout(function(){
                if (control.value === 'test@test.com') {
                  resolve({shouldBeUnique: true});
                } else {
                    resolve(null);
                }
            }, 1000);
        });
    }
    static cannotContainSpace(control: FormControl) {
        if (control.value.indexOf(' ') >= 0) {
            return {cannotContainSpace: true}
        }
        return null;
    }
    static emailInvalid(control: FormControl) {
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        
        // tslint:disable-next-line:one-line
        if (!re.test(control.value)) {
            return {emailInvalid: true };
        }
        return null;
    }
}
