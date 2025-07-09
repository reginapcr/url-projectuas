// src/service/SupabaseProductsAPI.js

import { createClient } from '@supabase/supabase-js';

// Ganti ini dengan URL dan Public Key Supabase Anda
// Anda bisa menemukannya di Settings -> API dalam dashboard Supabase Anda
const supabaseUrl = process.env.REACT_APP_SUPABASE_URL; // atau VITE_APP_SUPABASE_URL jika pakai Vite
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY; // atau VITE_APP_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  console.error("Supabase URL or Anon Key is not set in environment variables.");
}

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export const productsAPI = {
  // Fungsi untuk mengambil semua produk
  async fetchProducts() {
    const { data, error } = await supabase
      .from('products') // Nama tabel di Supabase
      .select('*'); // Ambil semua kolom

    if (error) {
      console.error('Error fetching products:', error);
      throw error;
    }
    return data;
  },

  // Fungsi untuk mengambil produk berdasarkan ID
  async fetchProductById(id) {
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .eq('id', id)
      .single(); // Digunakan jika Anda mengharapkan hanya satu hasil

    if (error) {
      console.error(`Error fetching product with ID ${id}:`, error);
      throw error;
    }
    return data;
  },

  // Fungsi untuk menambahkan produk baru (jika Anda butuh admin panel)
  async createProduct(productData) {
    const { data, error } = await supabase
      .from('products')
      .insert([productData]);

    if (error) {
      console.error('Error creating product:', error);
      throw error;
    }
    return data;
  },

  // Fungsi untuk update produk (jika Anda butuh admin panel)
  async updateProduct(id, updates) {
    const { data, error } = await supabase
      .from('products')
      .update(updates)
      .eq('id', id);

    if (error) {
      console.error(`Error updating product with ID ${id}:`, error);
      throw error;
    }
    return data;
  },

  // Fungsi untuk menghapus produk (jika Anda butuh admin panel)
  async deleteProduct(id) {
    const { data, error } = await supabase
      .from('products')
      .delete()
      .eq('id', id);

    if (error) {
      console.error(`Error deleting product with ID ${id}:`, error);
      throw error;
    }
    return data;
  },
};