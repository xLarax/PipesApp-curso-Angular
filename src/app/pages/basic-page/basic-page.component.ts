import { DatePipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, effect, inject, LOCALE_ID, signal } from '@angular/core';
import { AvailableLocale, LocaleService } from '../../services/locale.service';

@Component({
  selector: 'app-basic-page',
  imports: [LowerCasePipe, UpperCasePipe, TitleCasePipe, DatePipe],
  templateUrl: './basic-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class BasicPageComponent {

  localeService = inject(LocaleService);
  currentLocale = signal(inject(LOCALE_ID));

  nameLower = signal('lara');
  nameUpper = signal('LARA');
  fullName = signal('laRA ROdriGuEz');

  customDate = signal(new Date());

  tickingDateEffect = effect((onCleanup)=>{

    const interval = setInterval(()=>{
      this.customDate.set(new Date());
      console.log('Tick');
    }, 1000);

    onCleanup(()=>{
      clearInterval(interval);
    });

  });

  changeLocale(locale: AvailableLocale){

    console.log({locale});
    this.localeService.changeLocale(locale);
  }


}
