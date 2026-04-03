"use client";

import Link from 'next/link';
import { ArrowLeft, Lock, Mail } from 'lucide-react';

export default function Login() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6 bg-[#050505] relative overflow-hidden">
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-accent/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-accent-purple/10 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="w-full max-w-md relative z-10">
        <Link href="/" className="inline-flex items-center text-sm text-gray-400 hover:text-white mb-8 transition-colors group">
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to EX10SIV
        </Link>
        
        <div className="glass-card p-8 rounded-2xl glow-blue">
          <div className="mb-8">
            <h1 className="text-3xl font-black mb-2 tracking-tight">Welcome Back</h1>
            <p className="text-gray-400 text-sm">Sign in to your EX10SIV Passport</p>
          </div>
          
          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Email Identity</label>
              <div className="relative group">
                <Mail className="absolute left-3 top-3.5 h-5 w-5 text-gray-500 group-focus-within:text-accent transition-colors" />
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                />
              </div>
            </div>
            
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="block text-sm font-medium text-gray-300">Access Key</label>
                <a href="#" className="text-xs text-accent hover:text-accent-blue transition-colors">Recover</a>
              </div>
              <div className="relative group">
                <Lock className="absolute left-3 top-3.5 h-5 w-5 text-gray-500 group-focus-within:text-accent transition-colors" />
                <input 
                  type="password" 
                  placeholder="Enter your password" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                />
              </div>
            </div>
            
            <button className="w-full bg-accent hover:bg-accent-blue text-black font-bold py-3.5 rounded-xl transition-all hover:scale-[1.02] active:scale-95 mt-6 shadow-[0_0_20px_rgba(0,210,255,0.3)]">
              Authenticate
            </button>
          </form>
          
          <div className="mt-8 text-center text-sm text-gray-400 border-t border-white/10 pt-6">
            No active Passport?{' '}
            <Link href="/register" className="text-accent hover:text-accent-blue font-medium transition-colors hover:underline">
              Initialize Identity
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
