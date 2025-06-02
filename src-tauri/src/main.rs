// src-tauri/src/main.rs

use tauri::{CustomMenuItem, Menu, Submenu, Builder};

// Menu handlers
#[tauri::command]
fn handle_menu_click(event_id: &str) {
    match event_id {
        "chat" => println!("Chat Assistant clicked"),
        "workspace" => println!("Workspace clicked"),
        "snaps" => println!("Snaps clicked"),
        "context" => println!("Context View clicked"),
        "history" => println!("History clicked"),
        "settings" => println!("Settings clicked"),
        _ => {}
    }
}

fn main() {
    // Sidebar Menu
    let chat = CustomMenuItem::new("chat", "🤖 Chat Assistant");
    let workspace = CustomMenuItem::new("workspace", "📁 Workspace");
    let snaps = CustomMenuItem::new("snaps", "🧩 Snaps");
    let context = CustomMenuItem::new("context", "🧠 Context View");
    let history = CustomMenuItem::new("history", "💬 History");
    let settings = CustomMenuItem::new("settings", "⚙️ Settings");

    // Topbar Menu
    let switch_model = CustomMenuItem::new("switch_model", "🔄 Switch Model");
    let quick_command = CustomMenuItem::new("quick_command", "⚡ Quick Command");
    let toggle_online = CustomMenuItem::new("toggle_online", "🌐 Online/Offline");
    let toggle_theme = CustomMenuItem::new("toggle_theme", "🌙 Theme");

    // Create submenus
    let sidebar = Submenu::new("Navigation", Menu::new()
        .add_item(chat)
        .add_item(workspace)
        .add_item(snaps)
        .add_item(context)
        .add_item(history)
        .add_item(settings));

    let topbar = Submenu::new("Tools", Menu::new()
        .add_item(switch_model)
        .add_item(quick_command)
        .add_item(toggle_online)
        .add_item(toggle_theme));

    let menu = Menu::new()
        .add_submenu(sidebar)
        .add_submenu(topbar);

    Builder::default()
        .menu(menu)
        .on_menu_event(|event| {
            handle_menu_click(&event.menu_item_id());
        })
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}