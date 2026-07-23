import { expect, test } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test("shows the official music links without horizontal overflow", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { name: "DAVE", exact: true })).toBeVisible();
  await expect(page.getByRole("link", { name: /escuchar en spotify/i })).toHaveAttribute("href", /open\.spotify\.com/);
  await expect(page.getByRole("link", { name: /explorar soundcloud/i })).toHaveAttribute("href", /soundcloud\.com/);
  expect(await page.locator("html").evaluate((node) => node.scrollWidth <= node.clientWidth)).toBe(true);
});

test("mobile menu closes with Escape", async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 667 });
  await page.goto("/");
  const menu = page.locator(".menu-toggle");
  await menu.click();
  await expect(menu).toHaveAttribute("aria-expanded", "true");
  await page.keyboard.press("Escape");
  await expect(menu).toHaveAttribute("aria-expanded", "false");
});

test("layout has no horizontal overflow across target viewports", async ({ page }) => {
  await page.goto("/");
  for (const viewport of [{ width: 320, height: 568 }, { width: 430, height: 932 }, { width: 768, height: 1024 }, { width: 1024, height: 768 }, { width: 1440, height: 900 }]) {
    await page.setViewportSize(viewport);
    expect(await page.locator("html").evaluate((node) => node.scrollWidth <= node.clientWidth)).toBe(true);
  }
});

test("music section lists selectable individual releases", async ({ page }) => {
  await page.goto("/#musica");
  await expect(page.getByRole("heading", { name: /lanzamientos seleccionados/i })).toBeVisible();
  await expect(page.getByRole("button", { name: "AMOR" })).toBeVisible();
  await expect(page.getByRole("button", { name: /solo & contigo/i })).toBeVisible();
});

test("music player switches the selected individual release", async ({ page }) => {
  await page.goto("/#musica");
  await expect(page.locator("audio.local-audio source")).toHaveAttribute("src", /PENSANDO EN TU PIEL\.mp3/);
  await expect(page.getByRole("button", { name: /reproducir pensando en tu piel/i })).toBeVisible();
  await expect(page.getByRole("slider", { name: "Volumen" })).toBeVisible();
  const amor = page.locator(".track-selector").getByRole("button", { name: "AMOR" });
  await amor.click();
  await expect(page.locator(".now-playing-copy h4")).toHaveText("AMOR");
  await expect(amor).toHaveAttribute("aria-pressed", "true");
});

test("rider includes piano, 15 channels and the stage plot", async ({ page }) => {
  await page.goto("/#rider");
  await expect(page.getByRole("heading", { name: /rider tecnico/i })).toBeVisible();
  await expect(page.locator(".channel-grid").getByText("Piano", { exact: true })).toBeVisible();
  await expect(page.getByText(/sistema de 15 canales/i)).toBeVisible();
  await expect(page.getByRole("img", { name: /stage plot de dave/i })).toBeVisible();
});

test("contact directs users to the official Instagram", async ({ page }) => {
  await page.goto("/#contacto");
  await expect(page.getByRole("link", { name: /escribir por instagram/i })).toHaveAttribute("href", /instagram\.com\/daveosoriomusic/);
  await expect(page.getByRole("link", { name: /whatsapp 310 826 0010/i })).toHaveAttribute("href", "https://wa.me/573108260010");
});

test("social section contains Spotify, SoundCloud and Instagram", async ({ page }) => {
  await page.goto("/#redes");
  await expect(page.locator(".social-links").getByRole("link", { name: "Spotify" })).toHaveAttribute("href", /open\.spotify\.com/);
  await expect(page.locator(".social-links").getByRole("link", { name: "SoundCloud" })).toHaveAttribute("href", /soundcloud\.com/);
  await expect(page.locator(".social-links").getByRole("link", { name: "Instagram" })).toHaveAttribute("href", /instagram\.com\/daveosoriomusic/);
});

test("reduced motion disables decorative animation", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  await expect(page.locator(".hero-frequency span").first()).toHaveCount(0);
});

test("unknown routes render the Next.js not-found page", async ({ page }) => {
  await page.goto("/ruta-no-existe");
  await expect(page.getByRole("heading", { name: "404" })).toBeVisible();
});

test("simplified landing has no automatic accessibility violations", async ({ page }) => {
  await page.goto("/");
  const results = await new AxeBuilder({ page }).analyze();
  expect(results.violations).toEqual([]);
});
