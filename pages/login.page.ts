import { Page } from '@playwright/test';

export class LoginPage {
  private page: Page;/*  */

  // Elementos
  private usernameInput = 'input[name="username"]';
  private passwordInput = 'input[name="password"]';
  private submitButton = 'button[type="submit"]';
  private errorMessage = '.error-message';

  // Dados internos
  private validCredentials = {
    username: 'usuario_teste',
    password: 'senha_teste'
  };

  private invalidCredentials = {
    username: 'usuario_invalido',
    password: 'senha_invalida'
  };

  constructor(page: Page) {
    this.page = page;
  }

  // Métodos para interagir com os elementos da página

  async navigate(url: string) {
    await this.page.goto(url);
  }

  async fillUsername(username: string) {
    await this.page.fill(this.usernameInput, username);
  }

  async fillPassword(password: string) {
    await this.page.fill(this.passwordInput, password);
  }

  async submitLogin() {
    await this.page.click(this.submitButton);
  }

  async loginWithValidCredentials() {
    await this.fillUsername(this.validCredentials.username);
    await this.fillPassword(this.validCredentials.password);
    await this.submitLogin();
  }

  async loginWithInvalidCredentials() {
    await this.fillUsername(this.invalidCredentials.username);
    await this.fillPassword(this.invalidCredentials.password);
    await this.submitLogin();
  }

  // Métodos de verificação de erros ou sucesso

  async getErrorMessage() {
    return await this.page.textContent(this.errorMessage);
  }
}