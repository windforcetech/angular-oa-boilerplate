export class AnalyticsService {
  visit(pageName: string) {
    console.log('visit' + pageName);
  }

  leave(pageName: string) {
    console.log('leave' + pageName);
  }
}
