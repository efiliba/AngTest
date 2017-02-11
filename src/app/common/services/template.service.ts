import { Injectable, TemplateRef } from '@angular/core';

@Injectable()
export class TemplateService {
  templates = new Map<string, TemplateRef<any>>();
}
