import { Connection, Keypair, PublicKey } from "@solana/web3.js"
import { Program, Wallet, AnchorProvider } from "@coral-xyz/anchor"
import { IDL, Turbin3Prereq } from "./programs/Turbin3_prereq";
import wallet from "./dev-wallet.json"

const keypair = Keypair.fromSecretKey(new Uint8Array(wallet));

const connection = new Connection("https://api.devnet.solana.com");
const github = Buffer.from("<your github account>", "utf8");

const provider = new AnchorProvider(connection, new Wallet(keypair), { commitment: "confirmed"});

const program : Program<Turbin3Prereq> = new Program(IDL, provider);

