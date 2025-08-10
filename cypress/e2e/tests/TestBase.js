before(() => {
  // Chạy 1 lần trước tất cả test
  cy.log('==== Bắt đầu test suite ====');
  // Có thể login hoặc set up data ở đây
});

beforeEach(() => {
  // Chạy trước mỗi test case
  cy.log('---- Chuẩn bị test ----');
  cy.viewport(1280, 720); // set màn hình
});

afterEach(() => {
  // Chạy sau mỗi test case
  cy.log('---- Dọn dẹp sau test ----');
  // Có thể clear localStorage, reset db,...
  cy.clearLocalStorage();
});

after(() => {
  // Chạy 1 lần sau tất cả test
  cy.log('==== Kết thúc test suite ====');
});
