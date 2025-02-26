import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page'; 

test('deve fazer login com sucesso', async ({ page }) => {
  const loginPage = new LoginPage(page);
  
  // Navegar até a página de login
  await loginPage.navigate('https://exemplo.com/login');
  
  // Realizar login com credenciais válidas
  await loginPage.loginWithValidCredentials();
  
  // Verificar se a navegação após o login é bem-sucedida
  await expect(page).toHaveURL('https://exemplo.com/dashboard');
});

test('deve exibir erro ao tentar fazer login com credenciais inválidas', async ({ page }) => {
  const loginPage = new LoginPage(page);
  
  // Navegar até a página de login
  await loginPage.navigate('https://exemplo.com/login');
  
  // Tentar fazer login com credenciais inválidas
  await loginPage.loginWithInvalidCredentials();
  
  // Verificar se a mensagem de erro é exibida
  const errorMessage = await loginPage.getErrorMessage();
  expect(errorMessage).toContain('Credenciais inválidas');
});