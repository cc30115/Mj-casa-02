import { useState } from 'react';

export default function AuthModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [isLogin, setIsLogin] = useState(true);

  if (!isOpen) return null;

  return (
    <div className={`fixed inset-0 z-[100] flex items-center justify-center transition-opacity duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
      <div className="absolute inset-0 bg-[#1A1613]/80 backdrop-blur-md cursor-pointer" onClick={onClose}></div>
      <div className={`relative bg-[var(--paper)] w-full max-w-[420px] p-12 px-10 rounded-[4px] shadow-[0_30px_60px_rgba(0,0,0,0.2)] mx-5 z-[101] transition-transform duration-400 ease-[cubic-bezier(0.25,1,0.5,1)] ${isOpen ? 'translate-y-0' : 'translate-y-5'}`}>
        <button className="absolute top-5 right-5 bg-none border-none text-2xl text-[var(--muted)] cursor-pointer transition-colors duration-200 grid place-items-center w-8 h-8 rounded-full hover:text-[var(--ink)] hover:bg-black/5" onClick={onClose}>
          &times;
        </button>

        {isLogin ? (
          <div className="flex flex-col gap-5 transition-opacity duration-300">
            <h3 className="text-[clamp(24px,3vw,28px)] font-normal m-0 mb-2.5 text-[var(--ink)] -tracking-[0.01em]">Member Login</h3>
            <p className="text-[13px] text-[var(--muted)] -mt-2.5 mb-2.5">登入以檢視您的客製化專案與預約紀錄。</p>
            <input type="email" placeholder="Email Address" className="auth-field" />
            <input type="password" placeholder="Password" className="auth-field" />
            <button className="w-full bg-[var(--ink)] text-[var(--bg)] border-none p-4 rounded-[4px] text-[12px] font-medium tracking-[0.15em] uppercase cursor-pointer mt-2.5 transition-colors duration-300 hover:bg-[var(--ink-2)]">Log In 登入</button>
            <p className="text-[12px] text-center text-[var(--muted)] mt-2">
              還沒有帳號？ <a className="text-[var(--ink)] underline underline-offset-4 cursor-pointer font-medium ml-1.5" onClick={() => setIsLogin(false)}>註冊帳號 (Register)</a>
            </p>
          </div>
        ) : (
          <div className="flex flex-col gap-5 transition-opacity duration-300">
            <h3 className="text-[clamp(24px,3vw,28px)] font-normal m-0 mb-2.5 text-[var(--ink)] -tracking-[0.01em]">Create Account</h3>
            <p className="text-[13px] text-[var(--muted)] -mt-2.5 mb-2.5">建立專屬帳號，開啟您的空間設計旅程。</p>
            <input type="text" placeholder="Full Name" className="auth-field" />
            <input type="email" placeholder="Email Address" className="auth-field" />
            <input type="password" placeholder="Password" className="auth-field" />
            <button className="w-full bg-[var(--ink)] text-[var(--bg)] border-none p-4 rounded-[4px] text-[12px] font-medium tracking-[0.15em] uppercase cursor-pointer mt-2.5 transition-colors duration-300 hover:bg-[var(--ink-2)]">Register 註冊</button>
            <p className="text-[12px] text-center text-[var(--muted)] mt-2">
              已經有帳號了？ <a className="text-[var(--ink)] underline underline-offset-4 cursor-pointer font-medium ml-1.5" onClick={() => setIsLogin(true)}>點此登入 (Log in)</a>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
