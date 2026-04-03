"use client";

import Link from 'next/link';
import { ArrowLeft, Lock, Mail, User } from 'lucide-react';

export default function Register() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6 bg-[#050505] relative overflow-hidden">
      <div className="absolute top-1/4 right-0 w-72 h-72 bg-accent-purple/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="w-full max-w-md relative z-10">
        <Link href="/" className="inline-flex items-center text-sm text-gray-400 hover:text-white mb-8 transition-colors group">
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to EX10SIV
        </Link>
        
        <div className="glass-card p-8 rounded-2xl glow-purple animate-fade-in">
          <div className="mb-8">
            <h1 className="text-3xl font-black mb-2 tracking-tight">Initialize Identity</h1>
            <p className="text-gray-400 text-sm">Create your universal EX10SIV Passport</p>
          </div>
          
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1.5">Primary Email</label>
              <div className="relative group">
                <Mail className="absolute left-3 top-3.5 h-5 w-5 text-gray-500 group-focus-within:text-accent-purple transition-colors" />
                <input 
                  type="email" 
                  placeholder="name@domain.com" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-accent-purple focus:ring-1 focus:ring-accent-purple transition-all"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1.5">Secure Password</label>
              <div className="relative group">
                <Lock className="absolute left-3 top-3.5 h-5 w-5 text-gray-500 group-focus-within:text-accent-purple transition-colors" />
                <input 
                  type="password" 
                  placeholder="minimum 12 characters" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-accent-purple focus:ring-1 focus:ring-accent-purple transition-all"
                />
              </div>
            </div>

            <div className="pt-2">
              <button className="w-full bg-accent-purple hover:bg-purple-500 text-white font-bold py-3.5 rounded-xl transition-all hover:scale-[1.02] active:scale-95 shadow-[0_0_20px_rgba(124,58,237,0.3)]">
                Generate Passport
              </button>
            </div>
            
            <p className="text-xs text-gray-500 text-center mt-4">
              By initializing, you agree to the Web10 Infrastructure Protocol and core immutable policies.
            </p>
          </form>
          
          <div className="mt-8 text-center text-sm text-gray-400 border-t border-white/10 pt-6">
            Already verified?{' '}
            <Link href="/login" className="text-accent-purple hover:text-purple-400 font-medium transition-colors hover:underline">
              Authenticate here
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
